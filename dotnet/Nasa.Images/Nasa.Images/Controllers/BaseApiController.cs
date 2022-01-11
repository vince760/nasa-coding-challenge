using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nasa.Images.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa.Images.Controllers
{
  [ApiController]
  public abstract class BaseApiController : ControllerBase
  {
    public BaseApiController(ILogger logger)
    {
      logger.LogInformation($"Controller Firing {this.GetType().Name} ");
      Logger = logger;
    }
    protected ILogger Logger { get; set; }
    protected OkObjectResult Ok200(BaseResponse respone)
    {
      return base.Ok(respone);
    }

    
  }
}
