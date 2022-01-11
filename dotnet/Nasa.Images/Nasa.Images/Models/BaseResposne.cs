﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa.Images.Models
{
  public abstract class BaseResponse
  {
    public bool IsSuccessful { get; set; }

    public string TransactionId { get; set; }

    public BaseResponse()
    {
      //Sabio: This TxId we are just faking to demo the purpose
      this.TransactionId = Guid.NewGuid().ToString();
    }
  }
}
