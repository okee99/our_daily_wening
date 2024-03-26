document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua tombol 'Like'
    const likeButtons = document.querySelectorAll('.like-btn');

    // Tambahkan event listener untuk setiap tombol 'Like'
    likeButtons.forEach(likeBtn => {
        likeBtn.addEventListener('click', () => {
            // Ubah warna tombol saat diklik
            likeBtn.classList.toggle('liked');

            // Contoh tindakan lain yang dapat Anda lakukan saat tombol 'Like' diklik
            // ... Tulis kode Anda di sini ...
        });
    });

    // Ambil semua tombol 'Comment'
    const commentButtons = document.querySelectorAll('.comment-btn');

    // Tambahkan event listener untuk setiap tombol 'Comment'
    commentButtons.forEach(commentBtn => {
        commentBtn.addEventListener('click', () => {
            // Tampilkan area komentar saat tombol 'Comment' diklik
            const post = commentBtn.closest('.post');
            const commentsSection = post.querySelector('.comments');
            commentsSection.innerHTML = 'Komentar: Ini adalah contoh komentar.';
        });
    });

    // Ambil semua tombol 'Share'
    const shareButtons = document.querySelectorAll('.share-btn');

    // Tambahkan event listener untuk setiap tombol 'Share'
    shareButtons.forEach(shareBtn => {
        shareBtn.addEventListener('click', () => {
            // Contoh tindakan lain yang dapat Anda lakukan saat tombol 'Share' diklik
            alert('Postingan telah dibagikan!');
        });
    });
});
