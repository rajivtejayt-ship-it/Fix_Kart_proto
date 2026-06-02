using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FixKartApi.Data;
using FixKartApi.Models;

namespace FixKartApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkersController : ControllerBase
    {
        private readonly FixKartDbContext _context;

        public WorkersController(FixKartDbContext context)
        {
            _context = context;
        }

        // GET: api/Workers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Worker>>> GetWorkers([FromQuery] string? category)
        {
            var query = _context.Workers.AsQueryable();

            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.Category.ToLower() == category.ToLower());
            }

            return await query.ToListAsync();
        }

        // GET: api/Workers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Worker>> GetWorker(string id)
        {
            var worker = await _context.Workers.FindAsync(id);

            if (worker == null)
            {
                return NotFound();
            }

            return worker;
        }
    }
}
