function checkFileSize(input) {
    if (input.files.length > 0) {
        var file = input.files[0];
        var maxSize = 15 * 1024 * 1024; // 15MB (in bytes)

        if (file.size > maxSize) {
            alert("File size exceeds the maximum allowed size (15MB). Please choose a smaller image.");
            input.value = ""; // Clear the input field
        }
    }
}