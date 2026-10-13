from pydantic import BaseModel
class student_model(BaseModel):
    stu_name:str
    stu_dept:str
    stu_age:int
    stu_marks:float

class staff_model(BaseModel):
    staff_name:str
    staff_designation:str
    staff_dept:str