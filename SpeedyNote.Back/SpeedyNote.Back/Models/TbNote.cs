using System;
using System.Collections.Generic;

namespace SpeedyNote.Back.Models;

public partial class TbNote
{
    public int IdNote { get; set; }

    public string? Title { get; set; }

    public string NoteContent { get; set; } = null!;

    public int FkIdUser { get; set; }

    public virtual TbUser FkIdUserNavigation { get; set; } = null!;
}
