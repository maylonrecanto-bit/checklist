const taskGroups = [
  {
    category: "Abertura - Caixa",
    owner: "Caixa",
    items: [
      "Seguir horario de abertura",
      "Sistema funcionando corretamente, ligar e conferir",
      "Abrir caixa e terminais",
      "Planilha de comandas individuais preenchida pelos garcons",
      "Conferir suprimento",
      "Conferir estoque de bomboniere",
      "Ligar luzes",
      "Ligar som e adequar volume",
      "Conferir bobinas",
      "Tirar fotos da casa geral",
      "Fazer repost do Instagram",
      "Responder Instagram e WhatsApp",
      "Colocar pesquisas na pasta para cliente",
      "Ligar iFood",
      "Organizar o setor",
    ],
  },
  {
    category: "Fechamento - Caixa",
    owner: "Caixa",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Preencher livro",
      "Desligar caixas e terminais",
      "Conferir suprimento",
      "Desligar maquina de cartoes",
      "Desligar equipamento de som",
      "Desligar luzes",
      "Desligar luz de led do caixa",
      "Organizar o setor",
    ],
  },
  {
    category: "Abertura - Churrasqueira",
    owner: "Churrasqueira",
    items: [
      "Seguir horario de abertura",
      "Fazer limpeza geral",
      "Limpar Char broiler",
      "Limpar radiador de 15 em 15 dias",
      "Conferir estoque para o dia e descongelar",
      "Montar praca",
      "Organizar pista fria",
      "Fazer giro das carnes",
      "Preencher planilhas",
      "Economizar gas quando possivel",
      "Verificar producao de vinagrete pronta",
    ],
  },
  {
    category: "Fechamento - Churrasqueira",
    owner: "Churrasqueira",
    items: [
      "Seguir horario de fechamento e comunicar a gerencia",
      "Fazer limpeza geral",
      "Fazer lista de pedidos",
      "Lavar tabuleiro, caixa termica e utensilios",
      "Guardar sobras de carnes cruas na camara fria",
      "Desligar balcao e gas",
      "Retirar resto de carvao para o tambor",
      "Desmontar pista fria",
      "Limpar pista fria",
      "Desligar Char broiler",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Cozinha",
    owner: "Cozinha",
    items: [
      "Seguir horario de abertura",
      "Fazer limpeza geral",
      "Limpar caixa de gordura de 15 em 15 dias",
      "Limpar fritadeira de 15 em 15 dias",
      "Fazer contagem de estoque",
      "Montar praca",
      "Organizar camara fria e freezer",
      "Preparar jantar dos funcionarios ou almoco de sabado",
      "Ligar fritadeiras",
      "Montar festival e producao",
      "Ligar exaustao",
      "Conferir producao de porcoes",
      "Conferir estoque para trabalhar o dia",
      "Conferir rede de gas",
    ],
  },
  {
    category: "Fechamento - Cozinha",
    owner: "Cozinha",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Fazer limpeza geral",
      "Desligar fritadeiras",
      "Desligar chamas do fogao e registro de gas",
      "Desligar exaustao",
      "Desmontar praca",
      "Armazenar e guardar mercadorias",
      "Preencher planilhas",
      "Fazer pedido",
      "Etiquetar produtos",
      "Deixar camara fria limpa e fechada",
      "Organizar estoque frio e seco",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Copa",
    owner: "Copa",
    items: [
      "Seguir horario de abertura",
      "Fazer limpeza",
      "Contar quebra de utensilios e preencher planilha",
      "Conferir equipamentos limpos e testados",
      "Reforcar lavagem de utensilios",
      "Nao deixar bancada cheia, usar caixa branca",
      "Conferir banheiros do salao, pias e pisos limpos",
      "Conferir descarga dos banheiros",
      "Conferir papel toalha e papel higienico abastecidos",
      "Organizar espaco e evitar acumulo de louca",
    ],
  },
  {
    category: "Fechamento - Copa",
    owner: "Copa",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Fazer limpeza",
      "Deixar equipamentos limpos e desligados",
      "Limpar e desligar maquina de copos e pratos",
      "Reforcar lavagem de utensilios",
      "Organizar copos, talheres e loucas",
      "Desligar luzes e ventiladores",
      "Retirar residuos da pia",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Bar",
    owner: "Bar",
    items: [
      "Seguir horario de abertura",
      "Fazer limpeza geral, principalmente bicos das chopeiras",
      "Conferir tulipas geladas para o dia",
      "Ligar CO2 e engatar barril de chopp",
      "Conferir funcionamento da chopeira CO2",
      "Preparar torres de chopp com gelo",
      "Conferir estoque de polpas",
      "Conferir frutas",
      "Conferir estoque e reposicao de bebidas",
      "Organizar deposito e fazer giro das bebidas",
      "Verificar se falta algum produto",
      "Limpar freezer uma vez por semana",
      "Limpar radiadores do freezer de 15 em 15 dias",
      "Limpar freezer de tulipas semanalmente",
      "Lavar baldes e porta-garrafa de 15 em 15 dias",
      "Limpar maquina de gelo",
      "Porcionar frutas",
      "Montar bebidas dos drinks, utensilios e praca",
      "Descongelar chopeira com ajuda do gerente se necessario",
    ],
  },
  {
    category: "Fechamento - Bar",
    owner: "Bar",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Fazer limpeza",
      "Armazenar polpas",
      "Desligar CO2 e desengatar barril de chopp",
      "Deixar tulipas geladas para o dia seguinte",
      "Conferir funcionamento da chopeira CO2",
      "Esvaziar maquina de gelo",
      "Desmontar bar de cima",
      "Repor bebidas",
      "Fazer giro das bebidas",
      "Deixar estoque em cima de pallet",
      "Guardar copos e tulipas limpos",
      "Trancar deposito",
      "Trancar deposito da copa de suco",
      "Preencher planilhas",
      "Retirar lixo",
      "Limpar cafeteria, espremedores e similares",
      "Lavar torneiras da chopeira",
      "Guardar todo material de uso",
      "Desmontar bebidas dos drinks e utensilios lavados",
      "Verificar se freezer esta ligado",
    ],
  },
  {
    category: "Abertura - Gerencia",
    owner: "Gerencia",
    items: [
      "Garantir gerente na abertura da casa",
      "Conferir checklist de cada setor",
      "Conferir horario de abertura de todos",
      "Distribuir funcoes do checklist por setor com lideres",
      "Conferir procedimentos de caixa",
      "Acompanhar manutencoes para nao acumular",
      "Conferir bolachas de chopp limpas e em bom estado",
      "Conferir limpeza geral da copa, salao, bar, churrasqueira, caixa e cozinha",
      "Conferir limpeza de portas e janelas",
      "Fazer sorteio de pracas",
      "Ligar som e adequar volume",
      "Montar som para banda com volume adequado",
      "Verificar se falta algum produto",
      "Ligar climatizador",
      "Ligar ar-condicionado quando necessario",
      "Conferir limpeza do climatizador",
      "Tirar foto para rede social",
      "Orientar atendentes a pedir marcacao no Instagram",
      "Conferir e repassar agenda musical e futebol",
      "Repassar promocao do dia para os garcons",
      "Verificar repostagem do Instagram com o caixa",
      "Verificar meta de vendas diariamente",
      "Separar funcao de cada garcom no setor",
      "Conferir lancamento de couvert e playground",
    ],
  },
  {
    category: "Fechamento - Gerencia",
    owner: "Gerencia",
    items: [
      "Conferir checklists de cada setor",
      "Conferir limpeza geral dos setores",
      "Desligar luzes, som e TVs",
      "Desmontar som da banda",
      "Fazer lista de compras e enviar",
      "Desligar climatizador e ar-condicionado",
      "Verificar fechamento do caixa e vistar",
      "Verificar fechamento da casa, portas e portao",
      "Conferir horario de fechamento",
      "Acompanhar procedimentos de fechamento do caixa",
      "Verificar lixo no fechamento geral do refeitorio",
      "Desligar nobreak toda terca-feira para teste dos computadores do caixa",
    ],
  },
  {
    category: "Abertura - Salao Garcons",
    owner: "Salao Garcons",
    items: [
      "Seguir horario de abertura",
      "Conferir uniforme limpo e bem passado",
      "Conferir bolacha de chopp",
      "Conferir aparencia, barba feita e higiene pessoal",
      "Montar salao",
      "Limpar mesas e cadeiras",
      "Limpar galeteiros",
      "Limpar cardapios e QR Code",
      "Repor pimentas e limpar recipientes",
      "Manter vasos de flores com agua limpa",
      "Montar aparadores com copos, pratos e talheres limpos",
      "Abastecer e limpar alcool em gel nos aparadores",
      "Organizar bolachas com cuidado para nao embolorar",
      "Organizar deposito de cadeiras e informar defeitos ao gerente",
      "Manter cordialidade no atendimento",
      "Separar equipes responsaveis por cada setor",
      "Manter aparadores limpos durante a noite",
    ],
  },
  {
    category: "Fechamento - Salao Garcons",
    owner: "Salao Garcons",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Desmontar salao",
      "Guardar mesas e cadeiras",
      "Recolher galeteiros",
      "Guardar cardapios e QR Code",
      "Desligar climatizador, ar-condicionado e TVs",
      "Guardar porta-garrafas",
      "Verificar aparadores",
      "Varrer deck",
      "Organizar deposito de cadeiras e mesas",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Playground",
    owner: "Playground",
    items: [
      "Seguir horario de abertura",
      "Fazer limpeza geral",
      "Conferir funcionamento de TVs, climatizador, brinquedos e jogos",
      "Acender luzes",
      "Conferir e repassar manutencao dos brinquedos",
      "Organizar fundo do video game onde guarda objetos",
    ],
  },
  {
    category: "Fechamento - Playground",
    owner: "Playground",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Fazer limpeza",
      "Desligar TVs e jogos",
      "Desligar climatizador",
      "Verificar funcionamento dos brinquedos antes de desligar",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Cumim",
    owner: "Cumim",
    items: [
      "Seguir horario de abertura",
      "Organizar e esterilizar talheres mantendo a caixa fechada",
      "Limpar salao no decorrer da noite",
      "Levar comidas e recolher utensilios sujos ou sem uso da mesa",
      "Ficar atento ao sino para levar porcoes",
      "Usar bandeja em tudo",
      "Limpar arco de luz da feijoada",
      "Ajudar a copa levando utensilios",
      "Organizar louca suja na caixa para evitar quebra",
    ],
  },
  {
    category: "Fechamento - Cumim",
    owner: "Cumim",
    items: [
      "Seguir horario de fechamento e confirmar com a gerencia",
      "Organizar todos os utensilios",
      "Varrer salao",
      "Retirar lixo do salao",
    ],
  },
];

const defaultTasks = taskGroups.flatMap((group) =>
  group.items.map((title, index) => {
    const [operation, sector] = group.category.split(" - ");
    return {
      id: `${group.category}-${index}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      category: group.category,
      operation,
      sector,
      title,
      detail: "",
      owner: group.owner,
    };
  }),
);

const taskCatalogKey = "restaurant-checklist-task-catalog";
const whatsappNumber = "5534991147905";
const checklist = document.querySelector("#checklist");
const template = document.querySelector("#taskTemplate");
const dateInput = document.querySelector("#shiftDate");
const sectorFilter = document.querySelector("#sectorFilter");
const operationFilter = document.querySelector("#operationFilter");
const resetButton = document.querySelector("#resetButton");
const whatsappButton = document.querySelector("#whatsappButton");
const printButton = document.querySelector("#printButton");
const sendSummary = document.querySelector("#sendSummary");
const taskForm = document.querySelector("#taskForm");
const taskIdInput = document.querySelector("#taskId");
const taskTitleInput = document.querySelector("#taskTitle");
const saveTaskButton = document.querySelector("#saveTaskButton");
const clearTaskButton = document.querySelector("#clearTaskButton");
const editableTasks = document.querySelector("#editableTasks");
const doneCount = document.querySelector("#doneCount");
const pendingCount = document.querySelector("#pendingCount");
const progressPercent = document.querySelector("#progressPercent");
const progressBar = document.querySelector("#progressBar");

const normalizeTasks = (taskList) =>
  taskList.map((task) => {
    if (task.sector && task.operation) return task;
    const [operation = "Abertura", sector = task.owner || "Geral"] = task.category.split(" - ");
    return { ...task, operation, sector };
  });

const readTaskCatalog = () => {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(taskCatalogKey));
    return Array.isArray(savedTasks) && savedTasks.length ? normalizeTasks(savedTasks) : defaultTasks;
  } catch {
    return defaultTasks;
  }
};

const writeTaskCatalog = () => {
  localStorage.setItem(taskCatalogKey, JSON.stringify(tasks));
};

let tasks = readTaskCatalog();
const hasChecklistPage = Boolean(checklist);
const hasEditorPage = Boolean(taskForm);

const getLocalDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const today = getLocalDate();
if (dateInput) {
  dateInput.value = localStorage.getItem("restaurant-checklist-date") || today;
}

const getStorageKey = () => `restaurant-checklist-${dateInput?.value || today}`;

const formatTime = (date = new Date()) =>
  date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

const readState = () => {
  try {
    const rawState = JSON.parse(localStorage.getItem(getStorageKey())) || {};
    return Object.fromEntries(
      Object.entries(rawState).map(([id, value]) => {
        if (typeof value === "boolean") {
          return [id, value ? { done: true, completedAt: "" } : { done: false }];
        }
        return [id, value || { done: false }];
      }),
    );
  } catch {
    return {};
  }
};

const writeState = (state) => {
  localStorage.setItem(getStorageKey(), JSON.stringify(state));
};

const isTaskDone = (state, taskId) => Boolean(state[taskId]?.done);

const getSelectedTasks = () =>
  tasks.filter(
    (task) => task.sector === sectorFilter.value && task.operation === operationFilter.value,
  );

const getFilteredTasks = () => getSelectedTasks();

const updateSummary = () => {
  const state = readState();
  const selectedTasks = getSelectedTasks();
  const completed = selectedTasks.filter((task) => isTaskDone(state, task.id)).length;
  const pending = selectedTasks.length - completed;
  const percent = selectedTasks.length ? Math.round((completed / selectedTasks.length) * 100) : 0;

  doneCount.textContent = completed;
  pendingCount.textContent = pending;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  sendSummary.textContent = `${operationFilter.value} - ${sectorFilter.value}: ${completed} de ${selectedTasks.length} tarefas concluidas.`;
  whatsappButton.disabled = completed === 0;
};

const getCompletedMessage = () => {
  const state = readState();
  const selectedTasks = getSelectedTasks();
  const completedTasks = selectedTasks.filter((task) => isTaskDone(state, task.id));
  const lines = [
    `CHECKLIST RESTAURANTE - ${dateInput.value}`,
    `Setor: ${sectorFilter.value}`,
    `Tipo: ${operationFilter.value}`,
    `Concluidas: ${completedTasks.length}/${selectedTasks.length}`,
    "",
  ];

  completedTasks.forEach((task) => {
    const completedAt = state[task.id]?.completedAt || "horario nao registrado";
    lines.push(`- ${task.title} - ${completedAt}`);
  });

  return lines.join("\n").trim();
};

const renderChecklist = () => {
  if (!hasChecklistPage) return;
  const state = readState();
  const filteredTasks = getFilteredTasks();
  checklist.innerHTML = "";

  if (!filteredTasks.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Nenhuma tarefa encontrada para os filtros atuais.";
    checklist.append(empty);
    updateSummary();
    return;
  }

  const section = document.createElement("section");
  section.className = "category-section";

  const heading = document.createElement("div");
  heading.className = "category-heading";
  heading.innerHTML = `<h2>${sectorFilter.value}</h2><span>${operationFilter.value} - ${filteredTasks.length} tarefas</span>`;
  section.append(heading);

  filteredTasks.forEach((task) => {
    const row = template.content.firstElementChild.cloneNode(true);
    const checkbox = row.querySelector("input");
    const title = row.querySelector("h3");
    const detail = row.querySelector("p");
    const meta = row.querySelector(".task-meta");
    const completedAt = state[task.id]?.completedAt;

    checkbox.checked = isTaskDone(state, task.id);
    row.classList.toggle("is-done", checkbox.checked);
    title.textContent = task.title;
    detail.textContent = task.detail;
    detail.hidden = true;
    meta.innerHTML = `<span>${task.sector}</span><span>${task.operation}</span>${
      completedAt ? `<span>Concluido as ${completedAt}</span>` : "<span>Pendente</span>"
    }`;

    checkbox.addEventListener("change", () => {
      const nextState = readState();
      nextState[task.id] = checkbox.checked
        ? { done: true, completedAt: nextState[task.id]?.completedAt || formatTime() }
        : { done: false };
      writeState(nextState);
      renderChecklist();
    });

    section.append(row);
  });

  checklist.append(section);

  updateSummary();
};

const clearTaskForm = () => {
  if (!hasEditorPage) return;
  taskIdInput.value = "";
  taskTitleInput.value = "";
  saveTaskButton.textContent = "Salvar tarefa";
};

const renderEditableTasks = () => {
  if (!hasEditorPage) return;
  const selectedTasks = getSelectedTasks();
  editableTasks.innerHTML = "";

  if (!selectedTasks.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Nenhuma tarefa cadastrada para este setor.";
    editableTasks.append(empty);
    return;
  }

  selectedTasks.forEach((task) => {
    const row = document.createElement("article");
    row.className = "editable-row";

    const title = document.createElement("span");
    title.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "editable-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "ghost-button compact-button";
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => {
      taskIdInput.value = task.id;
      taskTitleInput.value = task.title;
      saveTaskButton.textContent = "Atualizar";
      taskTitleInput.focus();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button compact-button";
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", () => {
      const confirmed = confirm(`Excluir a tarefa "${task.title}"?`);
      if (!confirmed) return;
      tasks = tasks.filter((item) => item.id !== task.id);
      writeTaskCatalog();
      clearTaskForm();
      renderChecklist();
      renderEditableTasks();
    });

    actions.append(editButton, deleteButton);
    row.append(title, actions);
    editableTasks.append(row);
  });
};

const populateSectors = () => {
  [...new Set(tasks.map((task) => task.sector))].forEach((sector) => {
    const option = document.createElement("option");
    option.value = sector;
    option.textContent = sector;
    sectorFilter.append(option);
  });
};

if (dateInput) {
  dateInput.addEventListener("change", () => {
    localStorage.setItem("restaurant-checklist-date", dateInput.value);
    renderChecklist();
  });
}

[sectorFilter, operationFilter].forEach((control) => {
  control.addEventListener("input", () => {
    clearTaskForm();
    renderChecklist();
    renderEditableTasks();
  });
});

if (resetButton) {
  resetButton.addEventListener("click", () => {
    const confirmed = confirm("Reiniciar o checklist desta data?");
    if (!confirmed) return;
    localStorage.removeItem(getStorageKey());
    renderChecklist();
  });
}

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    const message = encodeURIComponent(getCompletedMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  });
}

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}

if (taskForm) {
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = taskTitleInput.value.trim();
    if (!title) return;

    const existingTaskId = taskIdInput.value;
    if (existingTaskId) {
      tasks = tasks.map((task) => (task.id === existingTaskId ? { ...task, title } : task));
    } else {
      const sector = sectorFilter.value;
      const operation = operationFilter.value;
      const newTask = {
        id: `custom-${Date.now()}`,
        category: `${operation} - ${sector}`,
        operation,
        sector,
        title,
        detail: "",
        owner: sector,
      };
      tasks = [...tasks, newTask];
    }

    writeTaskCatalog();
    clearTaskForm();
    renderEditableTasks();
  });
}

if (clearTaskButton) {
  clearTaskButton.addEventListener("click", clearTaskForm);
}

populateSectors();
renderChecklist();
renderEditableTasks();
