angular.module("codehub").directive("qaMeta", function () {
	return {
		templateUrl: "templates/qa-meta.html",
		replace: true
	}
});

angular.module("codehub").directive("codeControl", function () {
	return {
		templateUrl: "templates/code-control.html",
		replace: true
	}
});

angular.module("codehub").directive("codeEditor", function () {
	return {
		templateUrl: "templates/code-editor.html",
		replace: true,
		controller: "CodeEditorController"
	}
});

angular.module("codehub").directive("qaAnswer", function () {
	return {
		templateUrl: "templates/qa-answer.html",
		controller: "AnswerController"
	}
});

angular.module("codehub").directive("qaForm", function () {
	return {
		templateUrl: "templates/qa-form.html",
		replace: true
	}
});

angular.module("codehub").directive("qaQuestion", function () {
	return {
		templateUrl: "templates/qa-question.html",
		replace: true
	}
});