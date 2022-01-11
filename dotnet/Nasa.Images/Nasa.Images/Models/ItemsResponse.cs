using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa.Images.Models
{
  public class ItemsResponse<T> : SuccessResponse
  {
    public List<T> Items { get; set; }
  }
}
