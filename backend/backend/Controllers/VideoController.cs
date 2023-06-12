using backend.Contex;
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
		public async Task<ActionResult<VideoEntity>> CreateNewVideo()
	}
}
