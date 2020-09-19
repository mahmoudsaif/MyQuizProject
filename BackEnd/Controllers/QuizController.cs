using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
namespace BackEnd.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class QuizController : ControllerBase
	{
		private readonly QuizeContext quizContext;

		public QuizController(QuizeContext quizContext)
		{
			this.quizContext = quizContext;
		}
		[Authorize]
		[HttpGet]
		public IEnumerable<Models.Quiz> Get()
		{
			var userId = HttpContext.User.Claims.First().Value;
			return quizContext.Quizs.Where(x=>x.OwnerId==userId);
		}
		[HttpGet("all")]//comment
		public IEnumerable<Models.Quiz> GetAllQuizzes()
		{
			return quizContext.Quizs;
		}
		[Authorize]
		[HttpPost]
		public async Task<IActionResult> Post([FromBody] Models.Quiz quiz)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			var userId = HttpContext.User.Claims.First().Value;
			quiz.OwnerId = userId;

			quizContext.Quizs.Add(quiz);
			await quizContext.SaveChangesAsync();
			return Ok(quiz);
		}
		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody] Models.Quiz quiz)
		{
			if (id != quiz.Id)
				return BadRequest();
			quizContext.Entry(quiz).State = EntityState.Modified;
			await quizContext.SaveChangesAsync();
			return Ok(quiz);
		}
	}
}
