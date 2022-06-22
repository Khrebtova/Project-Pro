class ClientsController < ApplicationController
    before_action :authorize
    
    # GET /clients
    def index
        @clients = Client.all
        render json: @clients, status: :ok        
    end

    # # GET /clients/1
    # def show    #     
    #         @client = find_client
    #         if @client 
    #             render json: @client, status: :ok
    #         else
    #             render json: {errors: ["Client not found"]}, status: :not_found
    #         end    #     
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

    # authorize the user
    def authorize
        render json: {errors: ["Unauthorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
