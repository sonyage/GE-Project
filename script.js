// script.js

// JS File that does CRUD stuff

// display available classes
var app = new function()
{
    // initializing some variables that will be used more commonly in functions
    this.el = document.getElementById('courseList');
    this.el1 = document.getElementById('currList');

    // Class data would usually be taken from some database, but
    // just made up a few to show registration
    let class1 = { courseID: "MAT1", cName: "Introduction to Algebra", cTime: "MWF 1PM-3PM"};
    let class2 = { courseID:"ENG1", cName:"English Language", cTime:"MWF 6PM-7PM" };
    let class3 = { courseID:"CHEM1", cName:"Intro to College Chemistry", cTime:"TTh 8AM-9AM" };
    let class4 = { courseID:"BIO1", cName:"Intro to Biology", cTime:"MWF 4PM-5PM" };
    let class5 = { courseID:"GEO1", cName:"Intro to Geology", cTime:"MWF 3PM-4PM" };
    let class6 = { courseID:"CS1", cName:"Intro to Programming", cTime:"TTh 4PM-4:30PM" };

    // finishing up initializations down here
    this.courseList = [ class1, class2, class3, class4, class5, class6 ];
    this.currList = [];
    var students = [];
    var curStudent = [];

    // student model
    function student( name, studentID, password , email, courses)
    {
        this.name = name;
        this.studentID = studentID;
        this.password = password;
        this.email= email;
        this.courses = [];
    }

    // course model
    function course(courseID, cName, cTime)
    {
        this.courseID = courseID;
        this.cName = cName;
        this.cTime = cTime;
    }

    // presents available classes in table
    this.FetchAll = function()
    {
        var data = '';

        if(this.courseList.length > 0)
        {
            for(i = 0; i<this.courseList.length; i++)
            {
                data += '<tr>';
                data += '<td>'+ this.courseList[i].courseID + '</td>' ;
                data += '<td>'+ this.courseList[i].cName + '</td>' ;
                data += '<td>'+ this.courseList[i].cTime + '</td>' ;
                data += '<td> <button onclick="app.AddClass('+i+')"' 
                     +  ' class = "btn btn-info">Add</button></td>' ;
                data += '</tr>';
            }
        }
        return this.el.innerHTML = data;
    };

    // presents current classes you have "in your basket" on table
    this.FetchCurrClasses = function()
    {
        var data = '';

        if(this.currList.length > 0)
        {
            for(i = 0; i<this.currList.length; i++)
            {
                data += '<tr>';
                data += '<td>'+ this.currList[i].courseID + '</td>' ;
                data += '<td>'+ this.currList[i].cName + '</td>' ;
                data += '<td>'+ this.currList[i].cTime + '</td>' ;
                data += '<td> <button id="add-class" onclick="app.removeClass('+i+')"' 
                     +  ' class = "btn btn-danger">Remove</button></td>' ;
                data += '</tr>';
            }
        }
        return this.el1.innerHTML = data;
    };

    // shows classes youve successfully enrolled in
    this.FetchEnrolled = function()
    {
        var data = '';
        if(this.currList.length > 0)
        {
            for(i = 0; i<this.currList.length; i++)
            {
                data += '<tr>';
                data += '<td>'+ this.currList[i].courseID + '</td>' ;
                data += '<td>'+ this.currList[i].cName + '</td>' ;
                data += '<td>'+ this.currList[i].cTime + '</td>' ;
                data += '<td> <button id="add-class" onclick="app.removeClass('+i+')"' 
                     +  ' class = "btn btn-danger">Remove</button></td>' ;
                data += '</tr>';
            }
        }
        return this.el1.innerHTML = data;
    };

    // Login function, ideally would validate, but since no validation to check w/,
    // just personalizes
    this.Login = function(studentID, password)
    {
        var elID = document.getElementById('studentID');
        var elPass = document.getElementById('password');
        let id = elID.value;
        let pass = elPass.value;
        let student = ('Jackie Doe', id, pass, 'email', null);
        students.push(student);

        curStudent = student;
    };

    // shows student information that is recieved through current student model
    // on page
    this.showStudentInfo = function()
    {
        this.el2 = document.getElementById('StudentInfo');

        var curStudent = students.find(curStudent => 
                         students.studentID == curStudentID)
        var data = '';

        data += 'Student Information: <br> ' 
             +  'Name:' + curStudent.name + '<br>' 
             +  'ID:'+ curStudent.studentID + '<br>' 
             +  'Email:' + curStudent.email + '<br>';

        return this.el2.innerHTML = data;
    };

    // add a chosen class to basket
    this.AddClass = function(classNum)
    {
        this.currList.push(this.courseList[classNum]);
        this.FetchCurrClasses();
    };

    // removes a class from basket
    this.removeClass = function(classNum)
    {
        this.currList.splice(this.courseList[classNum],1);
        this.FetchCurrClasses();
    };

    // clears all basket
    this.CancelReg = function()
    {
        for(i = 0; i < this.currList.length; i++)
        {
            this.currList.splice(i);
            this.FetchCurrClasses();
        }
    };

    // moves basket classes to actual student enrollments
    this.SaveReg = function()
    {
        for(i = 0; i < this.currList.length; i++)
        {
            curStudent.courses.push(this.currList[i]);
            removeClass(i);
        }
    };
    
}

app.FetchAll();
app.FetchCurrClasses();