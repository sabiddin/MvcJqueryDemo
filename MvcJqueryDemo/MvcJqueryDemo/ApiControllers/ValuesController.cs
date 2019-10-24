using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcJqueryDemo.ApiControllers
{
    public class myClass
    {
        public string value { get; set; }
    }
    [RoutePrefix("api/Values")]
    public class ValuesController : ApiController
    {
        [HttpGet]
        [Route("GetValues")]
        public IEnumerable<string> GetValues()
        {
            return new List<string> { "value1", "value2" };
        }
        [HttpPost]
        [Route("AddValue")]
        public string AddValue([FromUri]string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                return "Added";
            }
            return "Not Added";
        }
        [HttpPost]
        [Route("AddValueWithObject")]
        public string AddValueWithObject([FromBody]myClass model)
        {
            if (!string.IsNullOrEmpty(model.value))
            {
                return "Added";
            }
            return "Not Added";
        }
    }
}
