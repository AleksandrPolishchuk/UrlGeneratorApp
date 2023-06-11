using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Contex
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<VideoEntity> Videos { get; set; }  
	}
}
