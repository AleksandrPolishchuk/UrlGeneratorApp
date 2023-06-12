using backend.Contex;
using backend.Dtos;
using backend.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VideoController : ControllerBase
	{
		// Access to DB
		private readonly ApplicationDbContext _context;

		public VideoController(ApplicationDbContext context)
		{
			_context = context;
		}


		// CRUD

		[HttpPost]
		public async Task<ActionResult<VideoEntity>> CreateNewVideo([FromBody]CreateVideoDto dto)
		{
			var newVideo = new VideoEntity()
			{
				Title = dto.Title,
				Url = "hjvjcjrcccxfdvw"
			};

			await _context.Videos.AddAsync(newVideo);
			await _context.SaveChangesAsync();

			return Ok(newVideo);
		}
	}
}
