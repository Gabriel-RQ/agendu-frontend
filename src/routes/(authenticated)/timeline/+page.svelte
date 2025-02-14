<script>
	const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
	const timeSlots = [
		'08:00 - 09:00',
		'09:00 - 10:00',
		'10:00 - 11:00',
		'11:00 - 12:00',
		'14:00 - 15:00',
		'15:00 - 16:00',
		'16:00 - 17:00'
	];

	// Dados do backend (Exemplo)
	/** @type {import('./$types').PageData} */
	export let data;

	// Converte os dados do backend para a estrutura de periods
	/** @type {any} */
	let periods = [];

	// Percorre os dados recebidos e transforma em períodos
	data.contracts.forEach((/** @type {any} */ entry) => {
		const timelineArray = entry.timeline.trim().split(/\s+/);

		// Itera sobre os dias da semana
		weekDays.forEach((day, dayIndex) => {
			const startIndex = dayIndex * 4; // Cada dia começa a cada 4 posições no timeline

			// Itera sobre os horários do dia (4 períodos por dia)
			for (let i = 0; i < 4; i++) {
				if (timelineArray[startIndex + i] === '1') {
					periods.push({
						start: timeSlots[i].split(' - ')[0],
						end: timeSlots[i].split(' - ')[1],
						subject: entry.classes.name,
						teacher: entry.teacher.name,
						weekday: day
					});
				}
			}
		});
	});
</script>

<svelte:head>
	<title>Cronograma</title>
</svelte:head>

<section class="container text-black font-bold text-1_5">
	<header>
		<h2>Cronograma</h2>
	</header>

	<div class="table-wrapper">
		<table>
			<thead>
				<tr>
					<th class="text-white">Horário</th>
					{#each weekDays as weekDay}
						<th class="weekday text-white">{weekDay}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each timeSlots as timeSlot}
					<tr>
						<td class="text-half">{timeSlot}</td>
						{#each weekDays as weekDay}
							{#each periods as period}
								{#if period.weekday === weekDay && period.start + ' - ' + period.end === timeSlot}
									<td class="active-period text-black text-half">
										<span>
											Professor: {period.teacher}
										</span>

										<p>
											Atividade: {period.subject}
										</p>
									</td>
								{/if}
							{/each}
							{#if !periods.some((/** @type {any} */ p) => p.weekday === weekDay && p.start + ' - ' + p.end === timeSlot)}
								<td></td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	section {
		display: grid;
		gap: 2rem;
		grid-template-rows: auto 1fr;
		max-height: 100vh;
	}

	.table-wrapper {
		overflow-y: auto;
	}

	table {
		border-collapse: separate;
		border-spacing: 1rem;
		counter-reset: active-period;
		width: 100%;
	}

	th,
	td {
		padding: 0.75rem;
		text-align: center;
	}

	.weekday {
		width: 20%;
	}

	th {
		background-color: var(--primary-color-light, #ddd);
		border-radius: 0.75rem;
	}

	.active-period {
		--active-period-border-radius: 0.75rem;
		border-radius: var(--active-period-border-radius);
		border: var(--primary-color-light) 1px solid;
		position: relative;
		padding-top: 1.75rem;
	}

	.active-period::before {
		background-color: var(--primary-color-light);
		border-radius: var(--active-period-border-radius) var(--active-period-border-radius) 0 0;
		box-sizing: border-box;
		counter-increment: active-period;
		content: counter(active-period) '° Período';
		position: absolute;
		padding: 0.25rem;
		top: 0;
		left: 0;
		width: 100%;
		grid-row: 0;
	}
</style>
