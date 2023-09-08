package co.edu.javeriana.wikigroup.templates;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/wiki")
public class WikigroupTemplates {
    @GetMapping("/inicio")
    public ModelAndView inicioModelAndView(){
        return new ModelAndView("index");
    }
    @GetMapping("/acerca-de/requerimientos")
    public ModelAndView requerimientosModelAndView(){
        return new ModelAndView("requerimientos");
    }
    @GetMapping("/acerca-de/arquitectura")
    public ModelAndView arquitecturaModelAndView(){
        return new ModelAndView("arquitecturaProyecto");
    }

    @GetMapping("/implementacion/desarrollo")
    public ModelAndView desarrolloModelAndView(){
        return new ModelAndView("desarrollo");
    }

    @GetMapping("/implementacion/pruebas")
    public ModelAndView pruebasModelAndView(){
        return new ModelAndView("pruebas");
    }

    @GetMapping("/implementacion/despliegue")
    public ModelAndView despliegueModelAndView(){
        return new ModelAndView("despliegue");
    }

    @GetMapping("/contactenos")
    public ModelAndView contactenosModelAndView(){
        return new ModelAndView("contactUsPage");
    }
}
