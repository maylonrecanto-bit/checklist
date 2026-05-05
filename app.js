const taskGroups = [
  {
    category: "Abertura - Caixa",
    owner: "Caixa",
    items: [
      "Seguir horário de abertura",
      "Sistema funcionando corretamente, ligar e conferir",
      "Abrir caixa e terminais",
      "Planilha de comandas individuais preenchida pelos garçons",
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
      "Seguir horário de fechamento e confirmar com a gerência",
      "Preencher livro",
      "Desligar caixas e terminais",
      "Conferir suprimento",
      "Desligar máquina de cartões",
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
      "Seguir horário de abertura",
      "Fazer limpeza geral",
      "Limpar Char broiler",
      "Limpar radiador a cada 15 dias",
      "Conferir estoque para o dia e descongelar",
      "Montar praça",
      "Organizar pista fria",
      "Fazer giro das carnes",
      "Preencher planilhas",
      "Economizar gás quando possível",
      "Verificar se há produção de vinagrete pronta",
    ],
  },
  {
    category: "Fechamento - Churrasqueira",
    owner: "Churrasqueira",
    items: [
      "Seguir horário de fechamento e comunicar a gerência",
      "Fazer limpeza geral",
      "Fazer lista de pedidos",
      "Lavar tabuleiro, caixa térmica e utensílios",
      "Guardar sobras de carnes cruas na câmara fria",
      "Desligar balcão e gás",
      "Retirar resto de carvão para o tambor",
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
      "Seguir horário de abertura",
      "Fazer limpeza geral",
      "Limpar caixa de gordura a cada 15 dias",
      "Limpar fritadeira a cada 15 dias",
      "Fazer contagem de estoque",
      "Montar praça",
      "Organizar câmara fria e freezer",
      "Preparar jantar dos funcionários ou almoço de sábado",
      "Ligar fritadeiras",
      "Montar festival e produção",
      "Ligar exaustão",
      "Conferir produção de porções",
      "Conferir estoque para trabalhar o dia",
      "Conferir rede de gás",
    ],
  },
  {
    category: "Fechamento - Cozinha",
    owner: "Cozinha",
    items: [
      "Seguir horário de fechamento e confirmar com a gerência",
      "Fazer limpeza geral",
      "Desligar fritadeiras",
      "Desligar chamas do fogão e registro de gás",
      "Desligar exaustão",
      "Desmontar praça",
      "Armazenar e guardar mercadorias",
      "Preencher planilhas",
      "Fazer pedido",
      "Etiquetar produtos",
      "Deixar câmara fria limpa e fechada",
      "Organizar estoque frio e seco",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Copa",
    owner: "Copa",
    items: [
      "Seguir horário de abertura",
      "Fazer limpeza",
      "Contar quebra de utensílios e preencher planilha",
      "Conferir equipamentos limpos e testados",
      "Reforçar lavagem de utensílios",
      "Não deixar bancada cheia; usar caixa branca",
      "Conferir banheiros do salão, pias e pisos limpos",
      "Conferir descarga dos banheiros",
      "Conferir papel toalha e papel higiênico abastecidos",
      "Organizar espaço e evitar acúmulo de louça",
    ],
  },
  {
    category: "Fechamento - Copa",
    owner: "Copa",
    items: [
      "Seguir horário de fechamento e confirmar com a gerência",
      "Fazer limpeza",
      "Deixar equipamentos limpos e desligados",
      "Limpar e desligar máquina de copos e pratos",
      "Reforçar lavagem de utensílios",
      "Organizar copos, talheres e louças",
      "Desligar luzes e ventiladores",
      "Retirar resíduos da pia",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Bar",
    owner: "Bar",
    items: [
      "Seguir horário de abertura",
      "Fazer limpeza geral, principalmente bicos das chopeiras",
      "Conferir tulipas geladas para o dia",
      "Ligar CO2 e engatar barril de chopp",
      "Conferir funcionamento da chopeira CO2",
      "Preparar torres de chopp com gelo",
      "Conferir estoque de polpas",
      "Conferir frutas",
      "Conferir estoque e reposição de bebidas",
      "Organizar depósito e fazer giro das bebidas",
      "Verificar se falta algum produto",
      "Limpar freezer uma vez por semana",
      "Limpar radiadores do freezer a cada 15 dias",
      "Limpar freezer de tulipas semanalmente",
      "Lavar baldes e porta-garrafas a cada 15 dias",
      "Limpar máquina de gelo",
      "Porcionar frutas",
      "Montar bebidas dos drinks, utensílios e praça",
      "Descongelar chopeira com ajuda do gerente, se necessário",
    ],
  },
  {
    category: "Fechamento - Bar",
    owner: "Bar",
    items: [
      "Seguir horário de fechamento e confirmar com a gerência",
      "Fazer limpeza",
      "Armazenar polpas",
      "Desligar CO2 e desengatar barril de chopp",
      "Deixar tulipas geladas para o dia seguinte",
      "Conferir funcionamento da chopeira CO2",
      "Esvaziar máquina de gelo",
      "Desmontar bar de cima",
      "Repor bebidas",
      "Fazer giro das bebidas",
      "Deixar estoque em cima de pallet",
      "Guardar copos e tulipas limpos",
      "Trancar depósito",
      "Trancar depósito da copa de suco",
      "Preencher planilhas",
      "Retirar lixo",
      "Limpar cafeteria, espremedores e similares",
      "Lavar torneiras da chopeira",
      "Guardar todo material de uso",
      "Desmontar bebidas dos drinks e utensílios lavados",
      "Verificar se o freezer está ligado",
    ],
  },
  {
    category: "Abertura - Gerência",
    owner: "Gerência",
    items: [
      "Garantir gerente na abertura da casa",
      "Conferir checklist de cada setor",
      "Conferir horário de abertura de todos",
      "Distribuir funções do checklist por setor com líderes",
      "Conferir procedimentos de caixa",
      "Acompanhar manutenções para não acumular",
      "Conferir bolachas de chopp limpas e em bom estado",
      "Conferir limpeza geral da copa, salão, bar, churrasqueira, caixa e cozinha",
      "Conferir limpeza de portas e janelas",
      "Fazer sorteio de praças",
      "Ligar som e adequar volume",
      "Montar som para banda com volume adequado",
      "Verificar se falta algum produto",
      "Ligar climatizador",
      "Ligar ar-condicionado quando necessário",
      "Conferir limpeza do climatizador",
      "Tirar foto para rede social",
      "Orientar atendentes a pedir marcação no Instagram",
      "Conferir e repassar agenda musical e futebol",
      "Repassar promoção do dia para os garçons",
      "Verificar repostagem do Instagram com o caixa",
      "Verificar meta de vendas diariamente",
      "Separar função de cada garçom no setor",
      "Conferir lançamento de couvert e playground",
    ],
  },
  {
    category: "Fechamento - Gerência",
    owner: "Gerência",
    items: [
      "Conferir checklists de cada setor",
      "Conferir limpeza geral dos setores",
      "Desligar luzes, som e TVs",
      "Desmontar som da banda",
      "Fazer lista de compras e enviar",
      "Desligar climatizador e ar-condicionado",
      "Verificar fechamento do caixa e vistá-lo",
      "Verificar fechamento da casa, portas e portão",
      "Conferir horário de fechamento",
      "Acompanhar procedimentos de fechamento do caixa",
      "Verificar lixo no fechamento geral do refeitório",
      "Desligar nobreak toda terça-feira para teste dos computadores do caixa",
    ],
  },
  {
    category: "Abertura - Salão Garçons",
    owner: "Salão Garçons",
    items: [
      "Seguir horário de abertura",
      "Conferir uniforme limpo e bem passado",
      "Conferir bolacha de chopp",
      "Conferir aparência, barba feita e higiene pessoal",
      "Montar salão",
      "Limpar mesas e cadeiras",
      "Limpar galeteiros",
      "Limpar cardápios e QR Code",
      "Repor pimentas e limpar recipientes",
      "Manter vasos de flores com água limpa",
      "Montar aparadores com copos, pratos e talheres limpos",
      "Abastecer e limpar álcool em gel nos aparadores",
      "Organizar bolachas com cuidado para não embolorar",
      "Organizar depósito de cadeiras e informar defeitos ao gerente",
      "Manter cordialidade no atendimento",
      "Separar equipes responsáveis por cada setor",
      "Manter aparadores limpos durante a noite",
    ],
  },
  {
    category: "Fechamento - Salão Garçons",
    owner: "Salão Garçons",
    items: [
      "Seguir horário de fechamento e confirmar com a gerência",
      "Desmontar salão",
      "Guardar mesas e cadeiras",
      "Recolher galeteiros",
      "Guardar cardápios e QR Code",
      "Desligar climatizador, ar-condicionado e TVs",
      "Guardar porta-garrafas",
      "Verificar aparadores",
      "Varrer deck",
      "Organizar depósito de cadeiras e mesas",
      "Retirar lixo",
    ],
  },
  {
    category: "Abertura - Playground",
    owner: "Playground",
    items: [
      "Seguir horário de abertura",
      "Fazer limpeza geral",
      "Conferir funcionamento de TVs, climatizador, brinquedos e jogos",
      "Acender luzes",
      "Conferir e repassar manutenção dos brinquedos",
      "Organizar fundo do video game onde guarda objetos",
    ],
  },
  {
    category: "Fechamento - Playground",
    owner: "Playground",
    items: [
      "Seguir horário de fechamento e confirmar com a gerência",
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
      "Seguir horário de abertura",
      "Organizar e esterilizar talheres mantendo a caixa fechada",
      "Limpar salão no decorrer da noite",
      "Levar comidas e recolher utensílios sujos ou sem uso da mesa",
      "Ficar atento ao sino para levar porções",
      "Usar bandeja em tudo",
      "Limpar arco de luz da feijoada",
      "Ajudar a copa levando utensílios",
      "Organizar louça suja na caixa para evitar quebra",
    ],
  },
  {
    category: "Fechamento - Cumim",
    owner: "Cumim",
    items: [
      "Seguir horário de fechamento e confirmar com a gerência",
      "Organizar todos os utensílios",
      "Varrer salão",
      "Retirar lixo do salão",
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
const storeFilter = document.querySelector("#storeFilter");
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

const correctText = (text) =>
  text
    .replaceAll("horario", "horário")
    .replaceAll("gerencia", "gerência")
    .replaceAll("Gerencia", "Gerência")
    .replaceAll("manutencoes", "manutenções")
    .replaceAll("manutencao", "manutenção")
    .replaceAll("funcoes", "funções")
    .replaceAll("funcao", "função")
    .replaceAll("funcionarios", "funcionários")
    .replaceAll("lideres", "líderes")
    .replaceAll("salao", "salão")
    .replaceAll("Salao", "Salão")
    .replaceAll("garcons", "garçons")
    .replaceAll("Garcons", "Garçons")
    .replaceAll("garcom", "garçom")
    .replaceAll("praca", "praça")
    .replaceAll("Praca", "Praça")
    .replaceAll("producao", "produção")
    .replaceAll("porcoes", "porções")
    .replaceAll("utensilios", "utensílios")
    .replaceAll("louca", "louça")
    .replaceAll("alcool", "álcool")
    .replaceAll("Nao", "Não")
    .replaceAll("nao", "não")
    .replaceAll("necessario", "necessário")
    .replaceAll("deposito", "depósito")
    .replaceAll("maquina", "máquina")
    .replaceAll("cartoes", "cartões")
    .replaceAll("higienico", "higiênico")
    .replaceAll("espaco", "espaço")
    .replaceAll("acumulo", "acúmulo")
    .replaceAll("refeitorio", "refeitório")
    .replaceAll("terca", "terça")
    .replaceAll("esta", "está")
    .replaceAll("camara", "câmara")
    .replaceAll("gas", "gás")
    .replaceAll("balcao", "balcão")
    .replaceAll("carvao", "carvão")
    .replaceAll("fogao", "fogão")
    .replaceAll("residuos", "resíduos")
    .replaceAll("reposicao", "reposição")
    .replaceAll("marcacao", "marcação")
    .replaceAll("promocao", "promoção")
    .replaceAll("lancamento", "lançamento")
    .replaceAll("aparencia", "aparência")
    .replaceAll("cardapios", "cardápios")
    .replaceAll("agua", "água")
    .replaceAll("responsaveis", "responsáveis")
    .replaceAll("portao", "portão");

const normalizeTasks = (taskList) =>
  taskList.map((task) => {
    if (task.sector && task.operation) {
      return {
        ...task,
        category: correctText(task.category),
        owner: correctText(task.owner),
        sector: correctText(task.sector),
        title: correctText(task.title),
      };
    }
    const [operation = "Abertura", sector = task.owner || "Geral"] = task.category.split(" - ");
    return {
      ...task,
      category: correctText(task.category),
      owner: correctText(task.owner),
      operation,
      sector: correctText(sector),
      title: correctText(task.title),
    };
  });

const readTaskCatalog = () => {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(taskCatalogKey));
    return Array.isArray(savedTasks) && savedTasks.length
      ? normalizeTasks(savedTasks)
      : normalizeTasks(defaultTasks);
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
if (storeFilter) {
  const savedStore = localStorage.getItem("restaurant-checklist-store");
  storeFilter.value = savedStore === "Recanto da Praca" ? "Recanto da Praça" : savedStore || storeFilter.value;
}

const makeStorageValue = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

const getSelectedStore = () => storeFilter?.value || "Choperia Colorado";

const getStorageKey = () =>
  `restaurant-checklist-${makeStorageValue(getSelectedStore())}-${dateInput?.value || today}`;

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
  sendSummary.textContent = `${getSelectedStore()} - ${operationFilter.value} - ${sectorFilter.value}: ${completed} de ${selectedTasks.length} tarefas concluídas.`;
  whatsappButton.disabled = completed === 0;
};

const getCompletedMessage = () => {
  const state = readState();
  const selectedTasks = getSelectedTasks();
  const completedTasks = selectedTasks.filter((task) => isTaskDone(state, task.id));
  const lines = [
    "REDE BOMBAR",
    `Loja: ${getSelectedStore()}`,
    `Data: ${dateInput.value}`,
    `Setor: ${sectorFilter.value}`,
    `Tipo: ${operationFilter.value}`,
    `Concluídas: ${completedTasks.length}/${selectedTasks.length}`,
    "",
  ];

  completedTasks.forEach((task) => {
    const completedAt = state[task.id]?.completedAt || "horário não registrado";
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
  heading.innerHTML = `<h2>${sectorFilter.value}</h2><span>${getSelectedStore()} - ${operationFilter.value} - ${filteredTasks.length} tarefas</span>`;
  section.append(heading);

  filteredTasks.forEach((task, index) => {
    const row = template.content.firstElementChild.cloneNode(true);
    const taskNumber = row.querySelector(".task-number");
    const checkbox = row.querySelector("input");
    const title = row.querySelector("h3");
    const detail = row.querySelector("p");
    const meta = row.querySelector(".task-meta");
    const completedAt = state[task.id]?.completedAt;

    checkbox.checked = isTaskDone(state, task.id);
    row.classList.toggle("is-done", checkbox.checked);
    taskNumber.textContent = String(index + 1).padStart(2, "0");
    title.textContent = task.title;
    detail.textContent = task.detail;
    detail.hidden = true;
    meta.innerHTML = `<span>${task.sector}</span><span>${task.operation}</span>${
      completedAt ? `<span>Concluído às ${completedAt}</span>` : "<span>Pendente</span>"
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

[storeFilter, sectorFilter, operationFilter].filter(Boolean).forEach((control) => {
  control.addEventListener("input", () => {
    if (control === storeFilter) {
      localStorage.setItem("restaurant-checklist-store", storeFilter.value);
    }
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
