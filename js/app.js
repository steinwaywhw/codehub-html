
 

angular.module("codehub", []);



angular.module("codehub").controller("CodeEditorController", function ($scope) {
	var init = function () {
			var editor = ace.edit("editor");
			editor.getSession().setUseWorker(false);
			editor.setTheme("ace/theme/idle_fingers");
			editor.getSession().setMode("ace/mode/javascript"); 
			return editor;
		}

	init ();
});