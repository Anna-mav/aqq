
document.querySelectorAll('.animated-svg').forEach(svg => {
    svg.addEventListener('mouseenter', () => {
        svg.style.animation = 'pulse 2s infinite';
    });
    svg.addEventListener('mouseleave', () => {
        svg.style.animation = 'pulse 5s infinite';
    });
});
