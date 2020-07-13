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
		String id = request.getParameter("id"), pwd = request.getParameter("pwd");
	if (id.equals("hong") && pwd.equals("1234")) {
	%>
	Hello
	<%=id%>
	&laquo;님&raquo; 환영합니다.
	<%
		} else {
	%>
	id와 비밀번호를 확인하세요.
	<%
		}
	%>

</body>
</html>