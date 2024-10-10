export default function getStudentByLocation(student, city) {
	return student.filter(student => student.location === city);
}
