const personGenerator = {
	surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
				"id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
	firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
	}`,
	firstNameFemaleJson: `{
			"count": 10,
			"list": {     
				"id_1": "Александра",
				"id_2": "Евгения",
				"id_3": "Софья",
				"id_4": "Светлана",
				"id_5": "Дарья",
				"id_6": "Анна",
				"id_7": "Мария",
				"id_8": "Инна",
				"id_9": "Юлия",
				"id_10": "Анастасия"
		}
	}`,
	firstNameFemaleJson: `{
				"count": 10,
				"list": {     
					"id_1": "Александра",
					"id_2": "Евгения",
					"id_3": "Софья",
					"id_4": "Светлана",
					"id_5": "Дарья",
					"id_6": "Анна",
					"id_7": "Мария",
					"id_8": "Инна",
					"id_9": "Юлия",
					"id_10": "Анастасия"
}
}`,
patronymicMaleJson: `{
	"count": 10,
	"list": {
		"id_1": "Александрович",
		"id_2": "Максимович",
		"id_3": "Иванович",
		"id_4": "Артемович",
		"id_5": "Дмитриевич",
		"id_6": "Никитич",
		"id_7": "Михаилович",
		"id_8": "Даниилович",
		"id_9": "Егорович",
		"id_10": "Андреевич"
}
}`,
patronymicFemaleJson: `{
	"count": 10,
	"list": {     
		"id_1": "Александровна",
		"id_2": "Максимовна",
		"id_3": "Ивановна",
		"id_4": "Артемовна",
		"id_5": "Дмитриевна",
		"id_6": "Никитовна",
		"id_7": "Михаиловна",
		"id_8": "Данииловна",
		"id_9": "Егоровна",
		"id_10": "Андреевна"
}
}`,

occupationMaleJson: `{
	"count": 11,
	"list": {
		"id_1": "программист",
		"id_2": "бухгалтер",
		"id_3": "актер",
		"id_4": "Каменщик",
		"id_5": "механик",
		"id_6": "фермер",
		"id_7": "деревообработчик",
		"id_8": "слесарь",
		"id_9": "солдат",
		"id_10": "шахтёр ",
		"id_11": "журналист"
}
}`,
occupationFemaleJson: `{
	"count": 10,
	"list": {     
		"id_1": "программист",
		"id_2": "бухгалтер",
		"id_3": "актер",
		"id_4": "журналист",
		"id_5": "швея",
		"id_6": "косметолог",
		"id_7": "фермер",
		"id_8": "массажист",
		"id_9": "учитель",
		"id_10": "воспитатель"
}
}`,

birthMonth: `{
	"count": 12,
	"list": {     
		"id_1": "января",
		"id_2": "февраля",
		"id_3": "марта",
		"id_4": "апреля",
		"id_5": "мая",
		"id_6": "июня",
		"id_7": "июля",
		"id_8": "августа",
		"id_9": "сентября",
		"id_10": "октября",
		"id_11": "ноября",
		"id_12": "декабря"
}
}`,

	GENDER_MALE: 'Мужчина',
	GENDER_FEMALE: 'Женщина',

	randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

	randomValue(json) {
		const obj = JSON.parse(json);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
		return obj.list[prop];
	},

	randomFirstName() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.firstNameMaleJson);
		}
		return this.randomValue(this.firstNameFemaleJson);

	},

	randomSurname() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.surnameJson);
		}
		return this.randomValue(this.surnameJson) + 'a';

	},

	randomPatronymic() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.patronymicMaleJson);
		}
		return this.randomValue(this.patronymicFemaleJson);

	},

	randomOccupation() {

		if (this.person.gender === 'Мужчина') {
			return this.randomValue(this.occupationMaleJson);
		}
		return this.randomValue(this.occupationFemaleJson);

	},
	
	randomGender() {

		return (this.randomIntNumber(1, 0) === 0) ? this.GENDER_MALE : this.GENDER_FEMALE;

	},

	randomBirth() {

		return this.randomIntNumber(2000, 1950);

	},

	randomBirthMonth() {

		return this.randomValue(this.birthMonth);

	},

	randomBirthDay() {

		if (this.person.birthMonth === "апреля" || this.person.birthMonth === "июня" || this.person.birthMonth === "сентября" || this.person.birthMonth === "ноября"){
			return this.randomIntNumber(1, 30);
		}
		else if (this.person.birthMonth === "февраля"){
		return this.randomIntNumber(1, 28);
		}
		else {
			return this.randomIntNumber(1, 31);
		}
		
	},

	getPerson() {
		this.person = {};
		this.person.gender = this.randomGender();
		this.person.firstName = this.randomFirstName();
		this.person.surname = this.randomSurname();
		this.person.patronymic = this.randomPatronymic();
		this.person.occupation = this.randomOccupation();
		this.person.birth = this.randomBirth();
		this.person.birthMonth = this.randomBirthMonth();
		this.person.birthDay = this.randomBirthDay();
		return this.person;
	}
};
