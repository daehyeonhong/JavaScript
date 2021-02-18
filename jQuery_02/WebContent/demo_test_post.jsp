<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	String name = request.getParameter("name"), city = request.getParameter("city"), age = request.getParameter("age"),
		job = request.getParameter("job");
%>

<%="Dear " + name + " hope you will live in " + city + " and  your age is " + age + " and your job is " + job%>