using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class QuestionsController : ControllerBase
	{
		private readonly QuizeContext quizeContext;

		public QuestionsController(QuizeContext quizeContext)
		{
			this.quizeContext = quizeContext;
		}
		[HttpGet]
		public IEnumerable<Models.Question> Get()
		{
			return quizeContext.Questions;
		}
		[HttpGet("{quizId}")]
		public IEnumerable<Models.Question> Get([FromRoute] int quizId)
		{
			return quizeContext.Questions.Where(x=>x.QuizId==quizId.ToString());
		}
		[HttpPost]
		public async Task<IActionResult> Post([FromBody] Models.Question question)
		{
			var quiz = quizeContext.Quizs
				.SingleOrDefault(x => x.Id == int.Parse(question.QuizId));
			if (quiz == null)
				return NotFound();
			quizeContext.Questions.Add(question);
			await quizeContext.SaveChangesAsync();
			return Ok(question);
		}
		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody] Models.Question question)
		{
			if (id != question.ID)
				return BadRequest();
			quizeContext.Entry(question).State = EntityState.Modified;
			await quizeContext.SaveChangesAsync();
			return Ok(question);
		}



	}
}
