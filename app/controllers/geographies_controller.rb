class GeographiesController < ApplicationController
    def index
        geographies = Geography.all
        render json: geographies, status: 200
    end


end
