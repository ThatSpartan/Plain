import re

class Question:
	def __init__(self, question):
		self.question = question
		self.options = []
		self.good_option_index = None

with open("gestion_choix_multiple.txt", "r") as file:
	questions = []

	for line in file.readlines():
		# [^-](.)* for the question
		# ^(-)[^-](.)* for options
		# ^(--)[^-](.)* for the good one
		if re.match(r"[^-](.)*", line):
			# a question
			questions.append(Question(line.replace("\n", "")))

		elif re.match(r"^(-)[^-](.)*", line):
			# option
			questions[-1].options.append(line.replace("\n", ""))

		elif re.match(r"^(--)[^-](.)*", line):
			# good option
			questions[-1].good_option_index = len(questions[-1].options)
			questions[-1].options.append(line.replace("\n", ""))

		else:
			print("Error for this line")

# --printing--

file = open("gestion_choix_multiple.js", "w")
file.write("let questions = [];")
file.write("""
class Question{
	constructor(question) {
		this.question = question;
		this.options = [];
		this.good_option_index = null;
	}
}
let q;
""")

for q in questions:
	# print(q.question)
	file.write(f"q = new Question(\"{q.question}\");")
	file.write(f"questions.push(q);"+"\n")
	for o in q.options:
		if q.options.index(o) == q.good_option_index:
			# print("\t\t" + o)
			file.write(f"questions[questions.length-1].options.push(\"{o}\");"+"\n")
			file.write(f"questions[questions.length-1].good_option_index = {q.good_option_index};"+"\n")
		else:
			# print("\t" + o)
			file.write(f"questions[questions.length-1].options.push(\"{o}\");"+"\n")

print(".Done..")
