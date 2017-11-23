<!DOCTYPE html>
<html>
	<head>
		<title>Code viewer</title>
		<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/styles/default.min.css">
	</head>
	<body>
		<pre>
			<code class="javascript">
<?php
	echo file_get_contents("engine.js");
?>
			</code>
		</pre>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/highlight.min.js"></script>
		<script>hljs.initHighlightingOnLoad();</script>
	</body>
</html>