﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ModelsApi.Models.DTOs
{
    public class NewExpense
    {
        [Key]
        public long ModelId { get; set; }
        public long JobId { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
        public decimal amount { get; set; }
    }
}
