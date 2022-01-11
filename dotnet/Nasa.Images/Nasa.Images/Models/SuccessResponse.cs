using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa.Images.Models
{
  public class SuccessResponse : BaseResponse
  {
    public SuccessResponse()
    {
      this.IsSuccessful = true;
    }
  }
}
