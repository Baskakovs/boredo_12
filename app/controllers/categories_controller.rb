class CategoriesController < ApplicationController
    def index_by_country
        country = Geography.find(params[:id])
        categories = country.categories
        render json: categories, status: 200
    end

    def index
        geography = Geography.find(params[:geography_id])
        render json: geography.categories, status: 200
    end

end