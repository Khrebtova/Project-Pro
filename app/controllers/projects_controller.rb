class ProjectsController < ApplicationController

    # GET /projects
    def index
        user = find_user
        if user
            @projects = Project.all.order(:updated_at).reverse
            render json: @projects
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    # GET /projects/1
    def show
        user = find_user
        if user
            @project = find_project
            if @project 
                render json: @project, status: :ok
            else
                render json: {errors: ["Project not found"]}, status: :not_found
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    # POST /projects
    def create
        user = find_user
        if user
            @project = Project.create(project_params)
            if @project.valid?
                render json: @project, status: :created
            else
                render json: {errors: @project.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    # PATCH/PUT /projects/1
    def update
        user = find_user
        if user
            @project = find_project
            if @project
                @project.update(project_params)
                render json: @project, status: :ok
            else
                render json: {errors: @project.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    # DELETE /projects/1
    def destroy
        user = find_user
        if user
            @project = find_project
            if @project
                @project.destroy
                head :no_content, status: :ok
            else
                render json: {errors: ["Project_not_found"]}, status: :not_found
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    private
    
    def find_project
        Project.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
        params.require(:project).permit(:name, :completed, :client_id, :employee_id)
    end

    def find_user
        User.find_by(id: session[:user_id])
    end

end
