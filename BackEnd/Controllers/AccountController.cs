using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System.Text;
using Microsoft.IdentityModel.Tokens;


namespace BackEnd.Controllers
{
	public class Credintials
	{
		public string Email { get; set; }
		public string Password { get; set; }

	}
	[Route("api/[controller]")]
	[ApiController]
	public class AccountController : ControllerBase
	{
		private readonly UserManager<IdentityUser> userManager;
		private readonly SignInManager<IdentityUser> signInManager;

		public AccountController(UserManager<IdentityUser> userManager,
			SignInManager<IdentityUser> signInManager)
		{
			this.userManager = userManager;
			this.signInManager = signInManager;
		}
		[HttpPost]
		public async Task<IActionResult> Register(Credintials credintials)
		{
			var user = new IdentityUser { UserName = credintials.Email, Email = credintials.Email };
			var result = await userManager.CreateAsync(user, credintials.Password);

			if (!result.Succeeded)
				return BadRequest(result.Errors);
			await signInManager.SignInAsync(user, isPersistent: false);

			var signingkey = new SymmetricSecurityKey
				(Encoding.UTF8.GetBytes("this is the secret phrase"));
			var signingCredentials = new SigningCredentials(signingkey,SecurityAlgorithms.HmacSha256);

			var jwt = new JwtSecurityToken(signingCredentials: signingCredentials);

			var token = new JwtSecurityTokenHandler().WriteToken(jwt).ToString();
			
			return Ok(JsonConvert.SerializeObject(token));
		}
	}
}
