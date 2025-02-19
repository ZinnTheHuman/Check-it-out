<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Mirror</title>
    <style>
        body { text-align: center; background: #000; color: white; font-family: Arial, sans-serif; }
        video { width: 100%; max-width: 600px; border: 3px solid white; border-radius: 10px; }
    </style>
</head>
<body>
    <h1>Look in the Mirror</h1>
    <video id="mirror" autoplay></video>
    <script>
        async function startMirror() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                document.getElementById('mirror').srcObject = stream;
            } catch (err) {
                alert("Camera access denied or not available.");
            }
        }
        startMirror();
    </script>
</body>
</html>