class EmployeesController < ApplicationController
    
    # GET /employees
    def index
        user = find_user
        if user
            employees = Employee.all    
            render json: employees, status: :ok
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end
    
     # GET /employees/1
    def show
        user = find_user
        if user 
            employee = find_employee
            if employee
                render json: employee, status: :ok
            else
                render json: {errors: ["Employee not found"]}, status: :not_found
            end
        else 
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

     # PATCH/PUT /employees/1
    def update
        user = find_user
        if user
            employee = find_employee
            if employee
                employee.update(employee_params)
                render json: employee, status: :ok
            else
                render json: {errors: ["Employee not found"]}, status: :not_found
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

     # POST /employees
    def create
        user = find_user
        if user
            employee = Employee.create(employee_params)
            if employee.valid?
                render json: employee, status: :created
            else
                render json: {errors: employee.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

     # DELETE /employees/1
    def destroy
        user = find_user
        if user
            @employee = find_employee
            if @employee
                @employee.destroy
                head :no_content, status: :ok
            else
                render json: {errors: ["Employee not found"]}, status: :not_found
            end
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end

    private

    def employee_params
        params.permit(:name, :title)
    end

    def find_employee
        Employee.find_by(id: params[:id])
    end

    def find_user
        User.find_by(id: session[:user_id])
    end


end
