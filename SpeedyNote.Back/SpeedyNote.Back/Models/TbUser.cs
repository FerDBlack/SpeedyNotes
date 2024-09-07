using System;
using System.Collections.Generic;

namespace SpeedyNote.Back.Models;

public partial class TbUser
{
    public int IdUser { get; set; }

    public string? UserName { get; set; }

    public string? UserLastName { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public byte[]? UserImg { get; set; }

    public virtual ICollection<TbNote> TbNotes { get; set; } = new List<TbNote>();
}
