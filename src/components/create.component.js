import { Component } from '../core/component';
import { Form } from '../core/form';
import { Validators } from '../core/validators';
import { ApiService } from '../service/api.service';

export class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
    this.form = new Form(this.$el, {
      title: [Validators.check],
      fulltext: [Validators.check, Validators.minLength(10)],
    });
  }
}

async function submitHandler(event) {
  event.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };
    const response = await ApiService.createPost(formData);
    if (response) {
      this.form.clear();
      alert('Запись создана в базе данных');
    } else {
      alert('При создании записи произошла ошибка!');
    }
  }
}
