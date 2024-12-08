export default function sortedHealth(arr) {
	return arr.sort((a, b) => b.health - a.health);
  }