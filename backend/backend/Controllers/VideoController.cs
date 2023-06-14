using backend.Contex;
using backend.Dtos;
using backend.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
				Url = CreateUniqueUrl()
			};

			await _context.Videos.AddAsync(newVideo);
			await _context.SaveChangesAsync();

			return Ok(newVideo);
		}

		[HttpGet]
		public async Task<ActionResult<List<VideoEntity>>> GetAllVideos()
		{
			var videos = await _context.Videos.OrderByDescending(q => q.CreatedAt).ToListAsync();

			return Ok(videos);
		}

		[HttpGet]
		[Route("{videoId}")]
		public async Task<ActionResult<VideoEntity>> GetVideoById([FromRoute] long videoId)
		{
			var video = await _context.Videos.FirstOrDefaultAsync(q => q.Id == videoId);

			if (video is null)
			{
				return NotFound("Video Not found");
			}

			return Ok(video);
		}

		[HttpPatch]
		[Route("{videoId}")]
		public async Task<IActionResult> UpdateVideo([FromRoute] long videoId, [FromBody] CreateVideoDto dto)
		{
			var video = await _context.Videos.FirstOrDefaultAsync(q => q.Id == videoId);

			if (video is null)
			{
				return NotFound("Video Not found");
			}

			video.Title = dto.Title;
			await _context.SaveChangesAsync();

			return Ok("Video updated successfully");
		}

		// Unique Url Generator function
		private string CreateUniqueUrl()
		{
			var newRandomUrl = "";
			Random rand = new Random();

			var boolFlag = true;

			while (boolFlag)
			{
				newRandomUrl = string.Empty;
				for ( int i = 0; i < 2; i++)
				{
					var randomNum = rand.Next(1,9);
					var randomChar1 = (char)rand.Next('a', 'z');
					var randomChar2 = (char)rand.Next('A', 'Z');
					newRandomUrl += randomChar2.ToString();
					newRandomUrl += randomChar1.ToString();
					newRandomUrl += randomNum.ToString();
				}

				var isDuplicate = _context.Videos.Any(q => q.Url == newRandomUrl);

				if (!isDuplicate)
				{
					boolFlag = false;
				}
			}

			return newRandomUrl;
		}
	}
}
