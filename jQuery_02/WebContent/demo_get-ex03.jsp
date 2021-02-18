<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String fName = request.getParameter("fname"), lName = request.getParameter("lname");
	System.out.println("fname: " + fName);
	System.out.println("lname: " + lName);
	%>
	Hello
	<%=fName%>
	<%=lName%>
</body>
</html>