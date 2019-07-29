using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {

            try
            {
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {

            try
            {

                if (usuario.Email == "rodrigobarreto@.com.br" && usuario.Senha == "abc")
                    return Ok(usuario);

                return BadRequest("Usuario ou senha invalido");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost]
        public ActionResult Post()
        {

            try
            {
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }

}