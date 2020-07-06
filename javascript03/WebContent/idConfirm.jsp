<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body>
    <% String id = request.getParameter("id"); if (id.equals("hong")) { %>
    <script type="text/javascript">
      alert("이미 존재하는 ID입니다.");
      /* opener: 팝업 창을 오픈한 부모 window */
      window.opener.document.frm.id.value = ""; /* 부모창의 요소에 값 설정 */
      window.opener.document.frm.id.focus();
      /* 부모창 요소에 focus()처리 */
      window.close(); /* 팝업창 닫기 */
    </script>
    <% } else { %>
    <script type="text/javascript">
      alert("사용할 수 있는 ID입니다.");
      window.close(); /* 팝업창 닫기 */
    </script>
    <% } %>
  </body>
</html>
