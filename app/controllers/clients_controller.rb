class ClientsController < ApplicationController
    # GET /clients
    def index
        user = find_user
        if user
            @clients = Client.all
            render json: @clients, status: :ok
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    # # GET /clients/1
    # def show
    #     user = find_user
    #     if user
    #         @client = find_client
    #         if @client 
    #             render json: @client, status: :ok
    #         else
    #             render json: {errors: ["Client not found"]}, status: :not_found
    #         end
    #     else
    #         render json: {errors: ["Unauthorized"]}, status: :unauthorized
    #     end
    # end

    # DELETE /clients/1
    # def delete
    #     @client = find_client
    #     if @client
    #         @client.destroy
    #         head :no_content, status: :ok
    #     else
    #         render json: {errors: ["Client not found"]}, status: :not_found
    #     end
    # end

    private

    def find_client
        Client.find_by(id: params[:id])
    end

    def find_user
        User.find_by(id: session[:user_id])
    end
end
