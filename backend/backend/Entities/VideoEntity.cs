namespace backend.Entities
{
	public class VideoEntity
	{
		public long Id { get; set; }
		public string Url { get; set; }
		public string Title { get; set; }
		public DateTime CreatedAt { get; set; } = DateTime.Now;

	}
}
