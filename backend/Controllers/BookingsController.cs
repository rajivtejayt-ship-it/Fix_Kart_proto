using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FixKartApi.Data;
using FixKartApi.Models;

namespace FixKartApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly FixKartDbContext _context;

        public BookingsController(FixKartDbContext context)
        {
            _context = context;
        }

        // POST: api/Bookings
        [HttpPost]
        public async Task<ActionResult<Booking>> CreateBooking(Booking booking)
        {
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBooking), new { id = booking.Id }, booking);
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> GetBooking(string id)
        {
            var booking = await _context.Bookings.Include(b => b.Worker).FirstOrDefaultAsync(b => b.Id == id);

            if (booking == null)
            {
                return NotFound();
            }

            return booking;
        }
        
        // POST: api/Bookings/{id}/release
        [HttpPost("{id}/release")]
        public async Task<IActionResult> ReleaseEscrow(string id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
                return NotFound();
                
            booking.Status = "Completed";
            booking.EscrowLocked = false;
            
            await _context.SaveChangesAsync();
            return Ok(new { message = "Escrow funds released." });
        }
    }
}
