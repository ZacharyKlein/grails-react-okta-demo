package grailsreactexample

import com.example.demo.beer.Beer

import java.util.stream.Stream

class BootStrap {

    def init = { servletContext ->

        Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius",
                "Budweiser", "Coors Light", "PBR").each { name ->
            new Beer(name: name).save()
        }

        Beer.list().each {
            println it
        }

    }
    def destroy = {
    }
}
