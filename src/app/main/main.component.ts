import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  category: string;
  completed: boolean;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  tasks: Task[] = [
    { name: 'Get a new helmet', category: 'Uncategorized', completed: false },
    {
      name: 'Purchase Milk & Corn Flakes',
      category: 'Groceries',
      completed: false,
    },
    { name: 'Pay mortgage', category: 'Payments', completed: false },
    { name: 'Complete Assignments', category: 'College', completed: false },
    {
      name: "Replace laptop's screen",
      category: 'Uncategorized',
      completed: false,
    },
  ];

  filteredTasks = this.tasks;
  selectedCategory = 'All';
  newTask = '';

  filterTasks(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(
        (task) => task.category === category
      );
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        name: this.newTask,
        category:
          this.selectedCategory === 'All'
            ? 'Uncategorized'
            : this.selectedCategory,
        completed: false,
      });
      this.newTask = '';
      this.filterTasks(this.selectedCategory);
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
    this.filterTasks(this.selectedCategory);
  }
}
