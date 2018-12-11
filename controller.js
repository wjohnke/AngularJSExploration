/*
Controller portion of Students app, used to contain all logic
for insertion and deletion of students
*/

var studentApp = angular.module('studentApp', []);

	studentApp.controller('StudentController', function($scope) {
		$scope.statusFilter=null;
		
		var studentsFromStorage = [];
		if(localStorage.getItem("students")!=null){
			studentsFromStorage = JSON.parse(localStorage.getItem("students") );
		}
		
		$scope.students = studentsFromStorage;  //Model contained in Local Storage
        
		$scope.addStudent = function(data){
			$scope.students.push(
				{
				Name:data.Name,
				StudentID:data.StudentID,
				Pawprint:data.Pawprint,
				Major:data.Major,
				Level:data.Level,
				GPA:data.GPA,
				AddressStreet:data.AddressStreet,
				AddressCity:data.AddressCity,
				AddressState:data.AddressState,
				AddressZip:data.AddressZip,
				Email:data.Email,
				Status:"Active_",
				Delete:false
				}
			);
			localStorage.setItem("students", JSON.stringify($scope.students));
		}
		$scope.deleteStudents = function(){
			for(s=$scope.students.length; s>=0; s--){
				if(($scope.students[s])!=undefined && ($scope.students[s]).Delete==true) $scope.students.splice(s,1);
			}
			localStorage.setItem("students", JSON.stringify($scope.students));
		}
		
		$scope.studentStatuses = ["Active_", "Inactive"];
	
	});
	studentApp.filter('statusFilter', function() {
		return {};
	});
