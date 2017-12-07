package com.example.demo.beer


import grails.rest.*
import grails.converters.*

class BeerRestfulController extends RestfulController {
	static responseFormats = ['json']

    BeerRestfulController() {
        super(Beer)
    }

    def goodBeers() {
        respond Beer.list().findAll { beer -> isGood(beer) }
    }

    private static isGood(Beer beer) {
        return (!["Budweiser", "Coors Light", "PBR"].contains(beer.name))
    }
}
