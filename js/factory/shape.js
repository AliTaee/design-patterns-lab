/**
 * Factory pattern
 *
 * Read more about this pattern at:
 * @link https://www.patterns.dev/vanilla/factory-pattern
 */
const createCircle = ({ radius, color, name }) => {
  return {
    type: 'circle',
    radius,
    color,
    name,
    diameter: radius * 2,
  }
}

const circle1 = createCircle({ radius: 10, color: 'red', name: 'circle1' })

console.log(circle1)
