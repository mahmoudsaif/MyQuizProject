using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace BackEnd
{
	public class UserDbContext :IdentityDbContext<IdentityUser>
	{
		public UserDbContext(DbContextOptions<UserDbContext>options):base(options)
		{

		}
	}
}
